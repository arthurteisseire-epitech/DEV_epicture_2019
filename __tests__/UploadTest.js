import React from 'react'
import {render, fireEvent, waitForElement} from "react-native-testing-library";
import wording from "../app/utils/wording"
import Upload from "../app/Upload";

test("Photo not present", () => {
    const page = render(<Upload/>);
    expect(page.queryByTestId(wording.imgToUploadId)).toBeNull();
});

test("Upload when photo is not present", () => {
    const page = render(<Upload/>);
    const uploadButton = page.queryByTestId(wording.uploadTitle);
    expect(uploadButton).not.toBeNull();
    expect(page.queryByText(wording.needPhotoToUpload)).toBeNull();
    fireEvent.press(uploadButton);
    expect(page.queryByText(wording.needPhotoToUpload)).not.toBeNull();
});
