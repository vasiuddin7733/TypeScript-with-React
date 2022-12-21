import App from "./App";
import Home from './components/home/home'
import Useforms from './containers/useForms'
import About from './containers/calculator'
import Contact from './containers/contact'
import Form from './containers/form'
import Client from './containers/apolloClient'
import Calendar from './containers/calendar'
import { NotFound } from './containers/notFound'
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

jest.mock("./components/home", () => {
  return {
    NotesList: () => <div data-testid="note-list-component">Hello World</div>,
  };
});

jest.mock("./components/note-detail", () => {
  return {
    NoteDetail: () => (
      <div data-testid="note-detail-component">Hello World</div>
    ),
  };
});

test("WHEN user is in index route(/) THEN render notes-list component", () => {
  window.history.pushState({}, "", "/home");

  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  expect(screen.getByTestId("note-list-component")).toBeInTheDocument();
});

test("WHEN user is in /note-list route THEN render notes-list component", () => {
  window.history.pushState({}, "", "/Calendar");

  render(
    <BrowserRouter>
      <Calendar />
    </BrowserRouter>
  );

  expect(screen.getByTestId("note-list-component")).toBeInTheDocument();
});

test("WHEN user is in /notes-detail route THEN render notes-detail component", () => {
  window.history.pushState({}, "", "/");

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(screen.getByTestId("note-detail-component")).toBeInTheDocument();
});