import React from 'react'
import {render, fireEvent, waitForElement} from "react-native-testing-library";
import wording from "../app/utils/wording"
import ImgurFeed from "../app/ImgurFeed";

test("Default feed", () => {
    const page = render(<ImgurFeed/>);
    expect(page.queryByText(wording.loadingImages)).toBeFalsy();
});

test("Change feed", () => {
    const page = render(<ImgurFeed/>);
    const feedInput = page.getByPlaceholder(wording.feedPlaceHolder);
    fireEvent(feedInput, 'onSubmitEditing', {"nativeEvent": {"target": 83, "text": "cats"}});
    expect(page.queryByText(wording.loadingImages)).toBeTruthy();
});

test("Change feed wait loading", async () => {
    const page = render(<ImgurFeed/>);
    const feedInput = page.getByPlaceholder(wording.feedPlaceHolder);
    fireEvent(feedInput, 'onSubmitEditing', {"nativeEvent": {"target": 83, "text": "cats"}});
    const sleep = (milliseconds) => {
        return new Promise((resolve) => setTimeout(resolve, milliseconds))
    };
    await sleep(2000);
    const success = await waitForElement(() =>
        page.queryByText(wording.imagesLoaded)
    );
    expect(success).toBeTruthy();
});
