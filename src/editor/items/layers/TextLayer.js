import { Layer } from "../Layer";

export class TextLayer extends Layer {
  getDefaultObject(obj = {}) {
    return super.getDefaultObject({
      itemType: 'text',
      name: "New Text",
      elementType: 'p',
      content: '',
      ...obj
    });
  }

  getDefaultTitle() {
    return "Text";
  }

  toCloneObject() {
    return {
      ...super.toCloneObject(),
      content: this.json.content
    }
  }

  get html () {
    var {id, itemType, content} = this.json;

    return `
      <p class='element-item ${itemType}' contenteditable="true" data-id="${id}">${content}</p>
    `
  }

}
 