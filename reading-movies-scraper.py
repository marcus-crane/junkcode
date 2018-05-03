from bs4 import BeautifulSoup
import urllib.request
import csv

COURTENAY = urllib.request.urlopen("http://readingcinemas.co.nz/displaysession/printSessionTimeByLoctaion/COURTENAY%20CENTRAL%2010").read()

soup = BeautifulSoup(COURTENAY, 'lxml')

movie_titles = soup.find_all('h3')
movie_dates = soup.find_all('div', class_='each-movie')

titles = []
ratings = []
dates = []

for element in movie_titles:
    title = element.get_text().strip()
    titles.append(title.partition('   ')[0])
    ratings.append(title.partition('   ')[2])

for element in movie_dates:
    dates.append(element.table.get_text())

def write():
    print("Writing to file...")
    with open('movies.csv', 'w') as csvfile:
      writer = csv.DictWriter(csvfile, delimiter=',', fieldnames=['Name', 'Rating', 'Dates'])
      writer.writeheader()
      for i in range(len(titles)):
        writer.writerow({ 'Name': titles[i], 'Rating': ratings[i] })
      print("Done")

write()
