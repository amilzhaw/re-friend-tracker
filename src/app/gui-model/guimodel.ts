export class GuiModel {

    
    private _guiModel = {

        "application": {

            "title": "Amil Friend Tracker",

            "pageList": [

                {

                    "id": "mainmenu",

                    "name": "MainMenu",

                    "elementList": [

                        {

                            "type": "button",

                            "name": "Friends",

                            "icon": "fa-user",

                            "color": "blue",

                            "page": "friendspage",

                        },

                        {

                            "type": "button",

                            "name": "Location",

                            "icon": "fa-cubes",

                            "color": "yellow",

                            "page": "locationspage",

                        },

                        {

                            "type": "button",

                            "name": "Groups",

                            "icon": "fa-weixin",

                            "color": "lime",

                            "page": "groupspage",

                        },

                        {

                            "type": "button",

                            "name": "Activity",

                            "icon": "fa-solid fa-calendar",

                            "color": "pomegranate",

                            "page": "activitypage"

                        }

                    ]

                },

                {

                    "id": "friendspage",

                    "elementList": [

                        {

                            "type": "backbutton",

                        },

                        {

                            "type": "newButton",

                            "name": "NewFriend",

                            "icon": "fa-user",

                            "color": "green",

                            "form": {

                                "form": "FriendForm"

                            }

                        },

                        {

                            "type": "list",

                            "icon": "fa-user",

                            "color": "blue",

                            "search": true,

                            "url": "/friend",

                            "page": "friendsactivitypage",

                            "form": {

                                "form": "FriendForm"

                            }

                        },

                    ]

                },

                {

                    "id": "locationspage",

                    "elementList": [

                        {

                            "type": "backbutton",

                        },

                        {

                            "type": "newButton",

                            "name": "NewLocation",

                            "icon": "fa-home",

                            "color": "green",

                            "width": 2,

                            "form": {

                                "form": "LocationForm"

                            }

                        },

                        {

                            "type": "list",

                            "icon": "fa-home",

                            "color": "blue",

                            "search": true,

                            "url": "/location",

                            "form": {

                                "form": "LocationForm"

                            }

                        },



                    ]

                },



                {

                    "id": "groupspage",

                    "elementList": [

                        {

                            "type": "backbutton",

                        },

                        {

                            "type": "newButton",

                            "name": "NewGroup",

                            "icon": "fa-weixin",

                            "color": "green",

                            "form": {

                                "form": "GroupForm"

                            }

                        },

                        {

                            "type": "list",

                            "icon": "fa-weixin",

                            "color": "lime",

                            "search": true,

                            "url": "/group",

                            "form": {

                                "form": "GroupForm"

                            }

                        },

                    ]

                },

                {

                    "id": "friendsactivitypage",

                    "elementList": [

                        {

                            "type": "backbutton",

                        },

                        {

                            "type": "newButton",

                            "name": "EditFriend",

                            "icon": "fa-regular fa-pen",

                            "color": "blue",

                            "width": 1,

                            "form": {

                                "form": "FriendForm"

                            }

                        },

                        {

                            "type": "newButton",

                            "name": "AddActivity",

                            "icon": "fa-solid fa-calendar",

                            "color": "green",

                            "form": {

                                "form": "AddActivityForm"

                            }

                        },

                        {

                            "type": "list",

                            "icon": "fa-solid fa-calendar",

                            "color": "pomegranate",

                            "search": true,

                            "url": "/friend/:friendKey/activity",

                            "form": {

                                "form": "ActivityForm"

                            }

                        },



                    ]

                },

                {

                    "id": "activityfriendspage",

                    "elementList": [

                        {

                            "type": "backbutton",

                        },

                        {

                            "type": "newButton",

                            "name": "EditActivity",

                            "icon": "fa-light fa-pencil",

                            "color": "green",

                            "form": {

                                "form": "ActivityForm"

                            }

                        },

                        {

                            "type": "newButton",

                            "name": "AddFriend",

                            "icon": "fa-user",

                            "color": "green",

                            "form": {

                                "form": "AddFriendForm"

                            }

                        },

                        {

                            "type": "list",

                            "icon": "fa-weixin",

                            "color": "carrot",

                            "search": true,

                            "url": "/activity/:activityKey/friend",

                            "form": {

                                "form": "FriendForm"

                            }

                        },

                    ]

                },

                {

                    "id": "activitypage",

                    "elementList": [

                        {

                            "type": "backbutton",

                        },

                        {

                            "type": "newButton",

                            "name": "NewActivity",

                            "icon": "fa-solid fa-calendar",

                            "color": "green",

                            "form": {

                                "form": "ActivityForm"

                            }

                        },

                        {

                            "type": "list",

                            "icon": "fa-solid fa-calendar",

                            "color": "pomegranate",

                            "search": true,

                            "url": "/activity",

                            "page": "activityfriendspage"

                        }

                    ]

                },



            ],



            "formList": [

                {

                    "id": "FriendForm",

                    "title": "Friend",

                    "url": "/friend",

                    "formFieldList": [

                        {

                            "id": "familyName",

                            "type": "text",

                            "name": "FamilyName",

                            "width": 1,

                            "required": true

                        },

                        {

                            "id": "firstName",

                            "type": "text",

                            "name": "FirstName",

                            "width": 1,

                            "required": true

                        },

                        {

                            "id": "nickname",

                            "type": "text",

                            "name": "Nickname",

                            "width": 2,

                            "required": true

                        },

                        {

                            "id": "location",

                            "type": "autocomplete",

                            "name": "Location",

                            "url": "/location",

                            "form": "LocationForm",

                            "width": 2,

                            "required": true

                        },

                        {

                            "id": "group",

                            "type": "autocomplete",

                            "name": "Group",

                            "url": "/group",

                            "form": "GroupForm",

                            "width": 2,

                            "required": true

                        },

                        {

                            "id": "birthdate",

                            "type": "date",

                            "name": "Birthday",

                            "width": 2,

                            "required": true

                        },

                        {

                            "id": "comment",

                            "type": "text",

                            "name": "Comments",

                            "width": 2,

                            "height": 4,

                            "maxLength": 5000,

                        },

                        {

                            "type": "deleteButton",

                            "name": "Delete"

                        },

                        {

                            "type": "cancelButton",

                            "name": "Cancel"

                        },

                        {

                            "type": "okButton",

                            "name": "Ok"

                        },



                    ]

                },

                {

                    "id": "LocationForm",

                    "title": "Location",

                    "url": "/location",

                    "formFieldList": [

                        {

                            "id": "name",

                            "type": "text",

                            "name": "LocationName",

                            "width": 2,

                            "required": true

                        },

                        {

                            "id": "comment",

                            "type": "text",

                            "name": "Comments",

                            "width": 2,

                            "height": 4,

                            "maxLength": 5000,

                        },

                        {

                            "type": "deleteButton",

                            "name": "Delete"

                        },

                        {

                            "type": "cancelButton",

                            "name": "Cancel"

                        },

                        {

                            "type": "okButton",

                            "name": "Ok"

                        }

                    ]

                },

                {

                    "id": "GroupForm",

                    "title": "Group",

                    "url": "/group",

                    "formFieldList": [

                        {

                            "id": "name",

                            "type": "text",

                            "name": "GroupName",

                            "width": 2,

                            "required": true

                        },

                        {

                            "id": "creationDate",

                            "type": "date",

                            "name": "CreationDate",

                            "width": 2,

                            "required": true

                        },

                        {

                            "id": "comments",

                            "type": "text",

                            "name": "Comments",

                            "width": 2,

                            "height": 4,

                            "required": true

                        },

                        {

                            "type": "deleteButton",

                            "name": "Delete"

                        },

                        {

                            "type": "cancelButton",

                            "name": "Cancel"

                        },

                        {

                            "type": "okButton",

                            "name": "Ok"

                        }

                    ]

                },

                {

                    "id": "ActivityForm",

                    "title": "Activity",

                    "url": "/activity",

                    "formFieldList": [

                        {

                            "id": "name",

                            "type": "text",

                            "name": "Name",

                            "width": 2,

                            "required": true

                        },

                        {

                            "id": "date",

                            "type": "date",

                            "name": "Date",

                            "width": 2,

                            "required": true

                        },

                        {

                            "id": "location",

                            "type": "autocomplete",

                            "name": "Location",

                            "url": "/location",

                            "form": "LocationForm",

                            "width": 2,

                            "required": true

                        },

                        {

                            "id": "comment",

                            "type": "text",

                            "name": "Comments",

                            "width": 2,

                            "required": false

                        },

                        {

                            "type": "deleteButton",

                            "name": "Delete"

                        },

                        {

                            "type": "cancelButton",

                            "name": "Cancel"

                        },

                        {

                            "type": "okButton",

                            "name": "Ok"

                        }

                    ]

                },

                {

                    "id": "AddActivityForm",

                    "title": "Activity",

                    "url": "/friend/:friendKey/activity",

                    "formFieldList": [

                        {

                            "id": "activity",

                            "type": "autocomplete",

                            "name": "Activity",

                            "url": "/activity",

                            "defaultKey": "activityKey",

                            "readonly": true,

                            "form": "ActivityForm",

                            "width": 2

                        },

                        {

                            "type": "deleteButton",

                            "name": "Delete"

                        },

                        {

                            "type": "cancelButton",

                            "name": "Cancel"

                        },

                        {

                            "type": "okButton",

                            "name": "Ok"

                        }

                    ]

                },

                {

                    "id": "AddFriendForm",

                    "title": "Friend",

                    "url": "/activity/:activityKey/friend",

                    "formFieldList": [

                        {

                            "id": "friend",

                            "type": "autocomplete",

                            "name": "Friend",

                            "url": "/friend",

                            "defaultKey": "friendKey",

                            "readonly": true,

                            "form": "FriendForm",

                            "width": 2

                        },

                        {

                            "type": "deleteButton",

                            "name": "Delete"

                        },

                        {

                            "type": "cancelButton",

                            "name": "Cancel"

                        },

                        {

                            "type": "okButton",

                            "name": "Ok"

                        }

                    ]

                },

            ],



        }

    };

    get guiModel() {

        return this._guiModel;

    }

}