

class Group() {
  constructor(time, location, description, reoccur, announcements, listOfStudents, creator) {
    this.time = time;
    this.location = location;
    this.description = description;
    this.reoccur = reoccur;
    this.announcements = announcements;
    this.listOfStudents = listOfStudents;
    this.creator = creator;
    this.setTime() {
      time = window.prompt("What time will this meeting be at?");
      return;
    }
    this.setLocation() {
      location = window.prompt("Where will this meeting be held?");
      return;
    }
    this.setDescription(){
      description = window.prompt("What will you be doing at this meeting?");
      return;
    }
    }
  }
}
