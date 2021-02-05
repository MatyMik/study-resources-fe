import React from 'react';
import GooglePicker from 'react-google-picker';

const GoodgleDriveUpload = () => (
  <GooglePicker
    clientId="YOUR_CLIENT_ID_HERE"
    developerKey="YOUR_DEVELOPER_KEY_HERE"
    scope={['https://www.googleapis.com/auth/drive']}
    onChange={(data) => console.log('on change:', data)}
    onAuthFailed={(data) => console.log('on auth failed:', data)}
    multiselect
    navHidden
    authImmediate={false}
    viewId="DOCS"
    mimeTypes={['image/png', 'image/jpeg', 'image/jpg']}
    createPicker={(google, oauthToken) => {
      const googleViewId = google.picker.ViewId.DOCS;
      const uploadView = new google.picker.DocsUploadView();
      const docsView = new google.picker.DocsView(googleViewId)
        .setIncludeFolders(true)
        .setSelectFolderEnabled(true);

      const picker = new window.google.picker.PickerBuilder()
        .enableFeature(google.picker.Feature.SIMPLE_UPLOAD_ENABLED)
        .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
        .addView(docsView)
        .addView(uploadView)/* DocsUploadView added */
        .setOAuthToken(oauthToken)
        .setDeveloperKey('YOUR_DEVELOPER_KEY_HERE')
        .setCallback((data) => {
          if (data.action == google.picker.Action.PICKED) {
            const fileId = data.docs[0].id;
            alert(`The user selected: ${fileId}`);
          }
        });
      picker.build().setVisible(true);
    }}
  >
    <span>Click here</span>
    <div className="google" />
  </GooglePicker>
);

export default GoodgleDriveUpload;
