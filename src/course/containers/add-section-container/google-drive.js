import React from 'react';
import GooglePicker from 'react-google-picker';

const GooglePrickerComponent = ({ setUrl, setDuration, setTitle }) => (
  <GooglePicker
    clientId={process.env.REACT_APP_GOOGLE_API_ID}
    developerKey={process.env.REACT_APP_GOOGLE_API_KEY}
    scope={['https://www.googleapis.com/auth/drive.readonly']}
    onChange={() => console.log(process.env.REACT_APP_GOOGLE_API_KEY)}
    onAuthFailed={() => console.log('on auth failed:', process.env.REACT_APP_GOOGLE_API_KEY)}
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
        .setDeveloperKey(process.env.REACT_APP_GOOGLE_API_KEY)
        .setCallback((data) => {
          if (data.action === google.picker.Action.PICKED) {
            setUrl(data.docs[0].embedUrl);
            setTitle(data.docs[0].name);
            setDuration(data.docs[0].duration);
          }
        });
      picker.build().setVisible(true);
    }}
  >
    <span>Click here</span>
    <div className="google" />
  </GooglePicker>
);

export default GooglePrickerComponent;
