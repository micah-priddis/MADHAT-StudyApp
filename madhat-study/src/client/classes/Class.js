class Class {


  constructor(Professor, ClassID, GroupList[]) {
    this.Professor = Professor;
    this.ClassID = ClassID;
    this.GroupList[] = GroupList[];
  }
  
  var txt = "";
  txt = GroupList.forEach(printGroupList);
  
  printGroupList(GroupList)
  {
    import {Listview,ListviewItem as Item} from "@ombiel/aek-lib";

    return (
        <Listview>
            <Item>txt</Item>  
        </Listview>
    ); 
  } 

}

