# Quiz Web App with Next.js

This project implements a quiz web app built with Next.js and TypeScript.

## Requirements

- Node.js v20+
- npm/yarn

## Installation

1. Clone the repository.
2. Run `npm install` or `yarn install`.

## Development

1. Start the development server: `npm run dev` or `yarn dev`.
2. Visit `http://localhost:3000` in your browser.

## Features

- question page will updated based on question  ID.
- Interactive quiz flow with answer selection and next question progression.
- Score calculation and progress display upon quiz completion.
- Reusable components for maintainability and consistency.
- TypeScript for type safety and improved code organization.

## Folder Structure

### pages/
- page.tsx: Renders the home page with the "Start Quiz" button.
- question.tsx: Handles question data based on questionData.
- results.js: Displays the final score and progress after quiz completion.
### components/
- ResultProgressBar.ts: Reusable component for the progress bar by showing percentage value.
- ScoreProgressBar.ts: Reusable component for rendering current question by number of question.
### lib/
- data.ts : Stores question data in a TypeScript array or interface for clarity.
- constant.ts: constant values are stored here.
- apiService.ts: fetch API call for POST, GET request.
- types.ts: for stroing the interface.
### api/
- questions/route.ts: question realted API. 
- results/route.ts:  result realted API.

## Usage

1. Click the "Start Quiz" button on the home page.
2. Answer each question by selecting the desired option.
3. Click the "Next" button to proceed to the next question.
4. After completing all five questions, your score and progress will be displayed.



    