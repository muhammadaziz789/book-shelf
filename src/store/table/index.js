import { makeAutoObservable, observable, action } from "mobx";

class TableState {
  constructor() {
    makeAutoObservable(this);
  }

  tableSize = {};
  tableSettings = {};
  tableHeight = "medium";

  setTableSize({ pageName, colID, colWidth }) {
    this.tableSize[pageName] = state.tableSize[pageName] || {};
    this.tableSize[pageName][colID] = colWidth;
  }
}

const tableState = new TableState()
export default tableState