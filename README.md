# Expense-Tracker-Site

## Project Description
Expense Tracker is an Airtable and React built site that will allow users to track their work expenses.  From the homepage users will be able to see current approved expenses and navigate to a new page where they can submit new expenses to track.  There will also be a form to create new expenses with the date, amount, what the expense was for and whether it has been submitted.   There will also be a delete feature.

## Wireframes
Wireframe below shows what the site will look like.

https://wireframe.cc/pgHdbT<br />
https://wireframe.cc/zxikTj<br />
https://wireframe.cc/BjldLr<br />
https://wireframe.cc/phHiW9

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
                "status": "Submitted",
                "date": "2021-01-01",
                "notes": "Monthly allowance",
                "name": "Internet",
                "amount": 150
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
| Jan 20   | Proposal Approval / Airtable Setup         |Complete  |
| Jan 21   | Component Creation / Get, Set, Delete Data |Complete  |      
| Jan 22   | CSS Components                             |Complete  |          
| Jan 23   | CSS Components                             |Complete  |          
| Jan 24   | Advanced CSS                               |Complete  |          
| Jan 27   | Presentations                              |Complete  |          

## Timeframes

| Component                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                  |    H     |      2hrs      |   3 hrs       |    3 hrs    |
| Airtable setup            |    H     |      2hr       |   1 hrs       |    1 hr     |
| Clickable Links           |    H     |      2hrs      |   2 hrs       |    2 hrs    |
| Data population           |    H     |      4hrs      |   3 hrs       |    3 hrs    |
| Building Components       |    H     |      4hrs      |   5 hrs       |    5 hrs    |
| Form creation             |    H     |      3hrs      |   2 hrs       |    2 hrs    |
| Data creation/update      |    H     |      4hrs      |   3 hrs       |   3 hrs     |
| Building Table            |    H     |      3hrs      |   4 hrs       |   4 hrs     |
| Sorting Tables            |    H     |      4hrs      |   6 hrs       |   6 hrs     | 
| Basic CSS                 |    H     |      4hrs      |   4 hrs       |   4 hrs     |
| UX Fine Tuning            |    H     |      3hrs      |   2 hrs       |   2 hrs     |
| Advanced CSS.             |    H     |      4hrs      |   4 hrs       |   4 hrs     |
| Total                     |    H     |      39hrs     |    39  hrs    |   39 hrs    |

## SWOT Analysis

### Strengths:

I have a good understanding of what my app is designed to do and the functionaility in React to make it work.

### Weaknesses:

I struggle with the front end piece of visualizing how I want things laid out and getting CSS to do what I want.

### Opportunities:
This project is an opportunity for me to practice all the things I've learned in React and work on my front end skills which are my weakest area.

### Threats:

I may have some trouble with moving expenses to different pages once the status changes and the CSS.
