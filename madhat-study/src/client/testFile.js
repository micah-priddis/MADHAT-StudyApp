
var G1 = Group();
var G2 = Group();
var G3 = Group();
var S1 = User();
var S2 = User();
var P = User();
var C1 = Class();
var C2 = Class();
var C3 = Class();
var C4 = Class();

G1.time = "2:00PM";
G1.location = "CUB";
G1.description = "Focused on reviewing for the upcoming midterm";
G1.reoccur = 0;
G1.announcements = "Please review the slides posted on the course website";
G1.listOfStudents = S2;
G1.creator = S1;

G2.time = "5:00PM";
G2.location = "Terrel Library";
G2.description = "Focused on working together to finish weekly homework assignments";
G2.reoccur = 1;
G2.announcements = null;
G2.listOfStudents = S1;
G2.creator = S2;

G3.time = "9:00PM";
G3.location = "Owen Library";
G3.description = "Focused on working together to finish weekly homework assignments";
G3.reoccur = 1;
G3.announcements = null;
G3.listOfStudents = S1;
G3.creator = S2;

S1.name = "Sarah Doe";
S1.emai = "sarah.doe@wsu.edu";
S1.ListOfClasses = new Array(C1, C2, C3, C4);
S1.ListOfGroups = new Array(G1, G2, G3);

S1.name = "John Doe";
S1.emai = "john.doe@wsu.edu";
S1.ListOfClasses = new Array(C1, C2, C3, C4);
S1.ListOfGroups = new Array(G1, G2, G3);

P.name = "Kevin Larry";
P.email = "kevin.smith@wsu.edu"
P.ListOfClasses = new Array(C1, C2, C3, C4);
P.ListOfGroups = new Array(G1, G2, G3);

C1.Professor = "Kevin Larry";
C1.ClassID = "CPTS 121";
C1.GroupList = G1;

C2.Professor = "Kevin Larry";
C2.ClassID = "CPTS 122";
C2.GroupList = G2;

C3.Professor = "Kevin Larry";
C3.ClassID = "CPTS 223";
C3.GroupList = G3;

C4.Professor = "Kevin Larry";
C4.ClassID = "CPTS 317";
C4.GroupList = null;
