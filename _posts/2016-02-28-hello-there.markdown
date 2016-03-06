---
layout: post
title:  "Testing Black Thursday"
date:   2016-02-28 20:28:45 -0700
categories: jekyll update
---
I actually just had to look up fixtures because I’m not sure I’m using all the testing terminology correctly (stubs? fixtures? mocks? doubles?), but at a high level here’s what Kris and I came up with.

##Items, Merchants, Etc.
For our low level classes (merchant, item, etc.) we put a hash into a setup method (info [here](http://chriskottom.com/blog/2014/10/4-fantastic-ways-to-set-up-state-in-minitest/) on how to create a setup method that will run prior to your tests) in our test that holds a hash of info that we would expect from a single line in the CSV ({id: “5”, first_name: “Joan”,  etc }). I think you can probably snag examples from the spec. The main benefit of this is that it's pretty easy to look to the top of the test and see what exactly we expect to be in the instance: if it says the id is supposed to be 4, then that's pretty much going to be my test.

##Repos
For our repos, we’ve taken more or less the same approach, but in the setup method we've been creating a few instances of the thing the repo is supposed to hold (some items, merchants, or whatever), and then feeding those into the repo using new. Looking at a couple of our tests it seems like the repos generally take an array in their initialize, so it just becomes a matter of creating three or four instances of whatever the repo is supposed to hold, putting those into an array, and then passing that array to the repo. Now we're in pretty much the same place as we are for our Items/Merchants testing, and we can just look to the top of the test to see what we're expecting.

##Sales Engine/Sales Analyst
For Sales Engine and Sales Analyst we wanted to use actual data, but not all of it. We took the data and cut out some chunks (usually around 25 rows or so, sometimes more) that we could use to do our testing and put those into a test_data folder in our test folder. We then initialize SE and/or SA with references to the test data instead of the full data set. This becomes a little tricky when Sales Analyst starts to look for outliers that are two above the standard deviation. Pretty consistently we've had to go in to tweak the data so that, for example, we have enough Sunday purchases to make sure that we don't get an empty array when trying to find outliers.

##Sales Engine/Sales Analyst Part II
Iteration 3 has you building and analyze more relationships between the data. It seemed like we were getting nonsense results because the real data that we pulled for Merchants or Invoices didn't necessarily have any relationship to other real data that we pulled for Transactions or ItemInvoices (which makes sense since we were just going in and pulling random chunks of data). Here we decided to go with completely synthetic data. Kris worked this last night, and is probably the best one to ask about specifics, but the high level idea is that we can craft small data sets that have straightforward relationships so that we can pretty quickly determine expected outcomes for our tests. This way we know that if we have an InvoiceItem that has an invoice_id of 2, then we'll also have an Invoice in our InvoiceRepo with an id of 2. We haven't completed the testing on that, but we're hoping that will get us over the hump for some of the Iteration 3 testing.
