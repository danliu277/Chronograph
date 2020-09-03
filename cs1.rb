# Filtered all documents by checking if it has any pages
def document_no_pages
    Document.all.filter{|document| document.pages.empty?}
end

# Map reports by putting name and total pages in an array then filter it
# by checking if the pages does not equals 0
def reports_and_pages
    reports = Report.all.map do |report|
        pages = 0
        report.documents.each{|document| pages += document.pages.length}
        return [report.title, pages]
    end
    return reports.filter{|report| report[1] != 0}
end

# Filter all pages by checking if footnotes is empty
# then convert the length of that to float and divide it by
# all pages length converted to float to get the percentage in decimal
def footnote_percentage
    return Page.all.filter{|page| !page.footnote.empty?}.length.to_f / Page.all.length.to_f
end

# Assuming method is in the page class and only checking specific page
# Reference pages body then use built in include string method to check
def search_page(input)
    self.body.include?(input)
end