Template.TopHeaderOptions.helpers({

  message: () => {
    const record = Main.findOne();
    return record && record.message;
  },

  isChecked: () => {
    const record = Main.findOne();

    if (record) {
      console.log(record.enabled)
      // return (record.enabled ? {"checkedss": "checked"} : {"fake": "something"})
      return record.enabled
      // console.log(record.enabled)
      // return record.enabled ? 'Enabled' : 'Disabled'
    }
  },

  attributes: () => {
    return {
      class: "class1 class2"
    }
  }
})