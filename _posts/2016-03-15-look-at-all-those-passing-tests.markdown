---
layout:     default
title:      "Look at all those passing tests"
date:       2016-03-15 11:01:46 -0500
categories: testing
image:      tests.jpg
---
Turing's [Black Thursday](https://github.com/turingschool/curriculum/blob/master/source/projects/black_thursday.markdown) project has been pretty much filling my days, so when a cohort member asked me what my approach to testing was I discovered that I had plenty to say. Right off the bat, I had to look up fixtures because I’m still not sure I’m using all the testing terminology correctly ([stubs? fixtures? mocks? doubles?](http://martinfowler.com/articles/mocksArentStubs.html)), but at a high level here’s what [Kris](https://github.com/kristindiannefoss) (my partner on this project) and I came up with.

### The Assignment

At a high level, we were given 6 csv's, filled to the brim with data, and asked to link them, analyze them, and report on them. The specification expects that we'll have both classes for individual objects (the items, customers, merchants, etc.), and classes to hold them (repositories). Balancing effective and efficient testing quickly became something to consider: we wanted to make sure that we caught all of the edge cases, while at the same time not having to run through all of the actual data every time we ran our tests.

### Items, Merchants, Etc.

For our low level classes (merchant, item, etc.) we put a hash into a setup method (info [here](http://chriskottom.com/blog/2014/10/4-fantastic-ways-to-set-up-state-in-minitest/) on how to create a setup method that will run prior to your tests) in our test that holds a hash of info that we would expect from a single line in the CSV ({id: “5”, first_name: “Joan”,  etc }). I think you can probably snag examples from the spec. The main benefit of this is that it's pretty easy to look to the top of the test and see what exactly we expect to be in the instance: if it says the id is supposed to be 4, then that's pretty much going to be my test.

### Repos

For our repos, we took more or less the same approach, but in the setup method we've been creating a few instances of the thing the repo is supposed to hold (some items, merchants, or whatever), and then feeding those into the repo using new. Looking at a few of our tests it seemed that the repos generally took an array in their initialize, so it just became a matter of creating three or four instances of whatever the repo is supposed to hold, putting those into an array, and then passing that array to the repo. That put us in pretty much the same place as we were for our Items/Merchants testing, and we could just look to the top of the test to see what we were expecting.

### Sales Engine/Sales Analyst

For Sales Engine and Sales Analyst we wanted to use actual data, but not all of it. We took the data and cut out some chunks (usually around 25 rows or so, sometimes more) that we could use to do our testing and put those into a test_data folder in our test folder. We then initialize SE and/or SA with references to the test data instead of the full data set. This became a little tricky when Sales Analyst starts to look for outliers that are two above the standard deviation. Pretty consistently we had to go in to tweak the data so that, for example, we have enough Sunday purchases to make sure that we don't get an empty array when trying to find outliers.

### Sales Engine/Sales Analyst Part II

Iteration 3 had us building and analyze more relationships between the data. It seemed like we were getting nonsense results because the real data that we pulled for Merchants or Invoices didn't necessarily have any relationship to other real data that we pulled for Transactions or ItemInvoices (which makes sense since we were just going in and pulling random chunks of data). Here we decided to go with completely synthetic data, which Kris was able to create for us. The high level idea is that we can craft small data sets that have straightforward relationships so that we can pretty quickly determine expected outcomes for our tests. This way we knew that if we have an InvoiceItem that has an invoice_id of 2, then we'll also have an Invoice in our InvoiceRepo with an id of 2.

### Full Data

Ultimately that synethetic data only got us part of the way there. I'm pretty convinced that in a real world situation we would be able to have some deeper level discussions to determine the expected relationships between these pieces and design our data accordingly (this could be a silly, silly dream!). Unfortunately, in our case we were learning about the data and its relationships at the same time we were designing our tests. So if we built synthetic data that made sense at one point, we might then have to change it based on deeper understanding that we accrued later in our process. This of course broke all of our already established tests. As we started to see this more often (when we started to implement higher level integration/feature tests), we decided that using the actual data would help us avoid some of these challenges. Given more time, I believe we could establish synthetic data that reflected the complexities of the actual data with fewer lines, but with the project due, we made what I think is probably an appropriate compromise. We still used our synthetic data where possible, and hit the real data as needed, and I don't even feel bad about it.
