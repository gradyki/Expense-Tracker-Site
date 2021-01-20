# Expense-Tracker-Site

## Project Description
Expense Tracker is an Airtable and React built site that will allow users to track their work expenses.  From the homepage users will be able to navigate to and click on an icon that lead a corresponding page with their current monthly expenses by category of need to submitted, need to submit, and approved.  Their will also be a form to create new expenses with the date, amount, what the expense was for and whether it has been submitted.   Their will also be a delete feature.

## Wireframes
Wireframe below shows what the site will look like.

https://wireframe.cc/pgHdbT

## Component Hierarchy

https://app.diagrams.net/#G1NMAAORn79X-PoL6LcMPyu_wupPhoUNXJ

## API and Data Sample
Airtable is returning data below.

https://airtable.com/tblIan5VDCzPu1jlI/viweeMlsSBP0uBIoF?blocks=hide

```
{
    "records": [
        {
            "id": "recIeui2z8zZ2y3pd",
            "fields": {
                "Name": "Internet",
                "Date": "2021-01-01",
                "Notes": "Monthly allowance",
                "Status": "Needs to Submit"
            },
            "createdTime": "2021-01-20T14:04:27.000Z"
        },
        {
            "id": "recmHorqc0tgXAXvK",
            "fields": {},
            "createdTime": "2021-01-20T14:04:27.000Z"
        },
        {
            "id": "reccQXKfbgwwz6CWh",
            "fields": {},
            "createdTime": "2021-01-20T14:04:27.000Z"
        }
    ],
    "offset": "reccQXKfbgwwz6CWh"
}

```

### MVP/PostMVP

#### MVP

- Home page with clickable icons that route to each respective feed.
- Get and post expense
- Use forms to create new expenses and update airtable.
- Delete posts from the feed and airtable.

#### PostMVP

- Collaborate with a UX student to make the UI more attractive/user-friendly.
- Create a graph and/or chart that gives a visual representation of monthly expenses.
- Have a way to track monthly experience and display it in a graph.
-Do the same for personal expenses.

## Project Schedule

| Day      | Deliverable                                | Status   |
| -------- | ------------------------------------------ | -------- |
| Jan 20   | Proposal Approval / Airtable Setup         |          |
| Jan 21   | Component Creation / Get, Set, Delete Data |          |
| Jan 22   | CSS Components                             |          |
| Jan 23   | CSS Components                             |          |
| Jan 24   | Advanced CSS                               |          |
| Jan 27   | Presentations                              |          |

## Timeframes

| Component                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                  |    H     |      2hrs      |               |             |
| Airtable setup            |    H     |      1hr       |               |             |
| Clickable Links           |    H     |      2hrs      |               |             |
| Data population pg 1      |    H     |      2hrs      |               |             |
| Data population pg 2      |    H     |      2hrs      |               |             |
| Data population pg 3      |    H     |      2hrs      |               |             |
| Form creation pg 1        |    H     |      2hrs      |               |             |
| Form creation pg 2        |    H     |      2hrs      |               |             |
| Form creation pg 3        |    H     |      2hrs      |               |             |
| Data creation/update pg 1 |    H     |      3hrs      |               |             |
| Data creation/update pg 2 |    H     |      3hrs      |               |             |
| Data creation/update pg 3 |    H     |      3hrs      |               |             |
| Data deletion pg 1        |    H     |      2hrs      |               |             |
| Data deletion pg 2        |    H     |      2hrs      |               |             |
| Data deletion pg 3        |    H     |      2hrs      |               |             |
| Component CSS pg 1        |    H     |      3hrs      |               |             |
| Component CSS pg 2        |    H     |      3hrs      |               |             |
| Component CSS pg 3        |    H     |      3hrs      |               |             |
| Total                     |    H     |      41hrs     |       hrs     |             |

## SWOT Analysis

### Strengths:

I have a good understanding of what my app is designed to do and the functionaility in React to make it work.

### Weaknesses:

I struggle with the front end piece of visualizing how I want things laid out and getting CSS to do what I want.

### Opportunities:
This project is an opportunity for me to practice all the things I've learned in React and work on my front end skills which are my weakest area.

### Threats:

I may have some trouble with moving expenses to different pages once the status changes and the CSS.
