import React from 'react'
import {render, fireEvent} from "react-native-testing-library";
import wording from "../app/utils/wording"
import ImgurFeed from "../app/ImgurFeed";

test("Change feed", async () => {
    const page = render(<ImgurFeed/>);
    const feedInput = page.getByPlaceholder(wording.feedPlaceHolder);
    expect(page.queryByText(wording.loadingImages)).toBeFalsy();
    fireEvent(feedInput, 'onSubmitEditing', {"nativeEvent": {"target": 83, "text": "cats"}});
    expect(page.queryByText(wording.loadingImages)).toBeTruthy();
});
