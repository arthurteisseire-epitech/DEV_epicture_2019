import React from 'react'
import {render, fireEvent} from "react-native-testing-library";
import wording from "../app/utils/wording"
import ImgurFeed from "../app/ImgurFeed";

test("Default feed", async () => {
    const page = render(<ImgurFeed/>);
    expect(page.queryByText(wording.loadingImages)).toBeFalsy();
});

test("Change feed", async () => {
    const page = render(<ImgurFeed/>);
    const feedInput = page.getByPlaceholder(wording.feedPlaceHolder);
    fireEvent(feedInput, 'onSubmitEditing', {"nativeEvent": {"target": 83, "text": "cats"}});
    expect(page.queryByText(wording.loadingImages)).toBeTruthy();
});
