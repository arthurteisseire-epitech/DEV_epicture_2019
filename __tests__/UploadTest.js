import React from 'react'
import {render, fireEvent, waitForElement} from "react-native-testing-library";
import wording from "../app/utils/wording"
import Upload from "../app/Upload";

test("Photo not present", () => {
    const page = render(<Upload/>);
    expect(page.queryByTestId(wording.imgToUploadId)).toBeNull();
});
