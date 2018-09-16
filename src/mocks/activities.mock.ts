import {Activity} from "../views/Explore";

export default class ActivityMock {
    public static getActivities(): Activity[] {
        return [
            {
                "id": 1,
                "imageUriSource": {
                    "uri": "https://png.pngtree.com/thumb_back/fw800/back_pic/03/65/59/2057aebfeced7d6.jpg"
                },
                "name": "Yoga"
            },

            {
                "id": 72,
                "imageUriSource": {
                    "uri": "https://png.pngtree.com/thumb_back/fw800/back_pic/03/77/77/8757c04edbed609.jpg"
                },
                "name": "Cycling"
            },

            {
                "id": 90,
                "imageUriSource": {
                    "uri": "http://missopilates.com.au/images/slide03.png"
                },
                "name": "Pilates"
            },
            {
                "id": 95,
                "imageUriSource": {
                    "uri": "http://tandtmartialarts.com/wp-content/uploads/TT_background_image3_highres.jpg"
                },
                "name": "Strength Training"
            },
            {
                "id": 23,
                "imageUriSource": {
                    "uri": "http://wushuacademy.com.au/wp-content/uploads/2013/12/Kung-Fu-Class-4.jpg"
                },
                "name": "Martial Arts"
            },
            {
                "id": 467,
                "imageUriSource": {
                    "uri": "https://c8.alamy.com/comp/E185X8/rowing-team-rowing-scull-on-lake-E185X8.jpg"
                },
                "name": "Rowing"
            }
        ];
    }
}