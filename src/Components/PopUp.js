import React from 'react';

class PopupWindow extends React.Component {
  componentDidMount() {
    this.openPopup();
  }

  openPopup(id) {
    const url = 'https://crm.zoho.com/crm/org814867720/tab/Contacts/5831478000004356208'; // Replace with your desired URL
    const width = 1000; // Set the width of the popup window
    const height = 1000; // Set the height of the popup window

    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    // window.open(
    //   url,
    //   'PopupWindow',
    //   `width=${width},height=${height},left=${left},top=${top}`
    // );

    window.open('https://crm.zoho.com/crm/org814867720/tab/CustomModule7/'+id,'popup','width=600,height=600,scrollbars=Yes,resizable=no')

  }

  render() {
    return null; // You can render an empty component or null for a popup
  }
}

export default PopupWindow;
