# lfpb

This is supposed to allow people to edit [the LFPB spreadsheet](https://docs.google.com/spreadsheets/d/1xEPQ8nRF2iuiSvzLhFj8zH7OJIYm_Iy-yojHF-wK0x0/edit?usp=drive_web&ouid=100119985712429120778).

## Setup

To get set up, you'll need to add an `.env` file to the base of this folder. It will look like this:

```
CLIENT_ID=
PROJECT_ID=
CLIENT_SECRET=
```

To get the values for this file, you'll need to [enable the API according to Google's instructions](https://developers.google.com/sheets/api/quickstart/nodejs#step_1_turn_on_the).

After you have the `.env` file set up, you can run `npm i` and then `npm run dev` to see the server running locally