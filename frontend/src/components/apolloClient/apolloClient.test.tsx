import React from "react";
import ApolloClient from "./apolloClient";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

jest.mock("./components/notes-list", () => {
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
    window.history.pushState({}, "", "/");

    render(
        <BrowserRouter>
            <ApolloClient />
        </BrowserRouter>
    );

    expect(screen.getByTestId("note-list-component")).toBeInTheDocument();
});

test("WHEN user is in /note-list route THEN render notes-list component", () => {
    window.history.pushState({}, "", "/note-list");

    render(
        <BrowserRouter>
            <ApolloClient />
        </BrowserRouter>
    );

    expect(screen.getByTestId("note-list-component")).toBeInTheDocument();
});

test("WHEN user is in /notes-detail route THEN render notes-detail component", () => {
    window.history.pushState({}, "", "/note-detail/1");

    render(
        <BrowserRouter>
            <ApolloClient />
        </BrowserRouter>
    );

    expect(screen.getByTestId("note-detail-component")).toBeInTheDocument();
});