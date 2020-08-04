# Project-2

## Project Description

My app is called "The Nation Cave". This is where you need to go to view amazing images of countries on planet Earth. Ranging from the USA to Taiwan, this is a great user friendly app that can provide all those images for whichever country you desire.

## Wireframes

### Home

![All Countries](https://i.imgur.com/nVig9gk.png)

### Movie Details

![Country Images](https://i.imgur.com/VubzkjF.png)

### MVP User Stories

_**MVP User Stories**_

- _As a user, I would like all buttons to be functional._
- _As a user, I would like for all data to be consistent throughout the componenents._
- _As a user, I would like to see a list of all countries by flag on the home page._
- _As a user, I would like to easily navigate through the app with my phone._

_**Post MVP Stretch Goals**_

- _As a user, I would like to be able to search for countries by name so that I can more easily find a country and its details._
- _As a user, I would like to filter countries by region, so that I can more easily select countries based on a specific region._

## API

[The Country DB API Documentation](https://pixabay.com/api/docs/)

#### Countries Response

```json
{
"total": 4692,
"totalHits": 500,
"hits": [
    {
        "id": 195893,
        "pageURL": "https://pixabay.com/en/blossom-bloom-flower-195893/",
        "type": "photo",
        "tags": "blossom, bloom, flower",
        "previewURL": "https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg"
        "previewWidth": 150,
        "previewHeight": 84,
        "webformatURL": "https://pixabay.com/get/35bbf209e13e39d2_640.jpg",
        "webformatWidth": 640,
        "webformatHeight": 360,
        "largeImageURL": "https://pixabay.com/get/ed6a99fd0a76647_1280.jpg",
        "fullHDURL": "https://pixabay.com/get/ed6a9369fd0a76647_1920.jpg",
        "imageURL": "https://pixabay.com/get/ed6a9364a9fd0a76647.jpg",
        "imageWidth": 4000,
        "imageHeight": 2250,
        "imageSize": 4731420,
        "views": 7671,
        "downloads": 6439,
        "favorites": 1,
        "likes": 5,
        "comments": 2,
        "user_id": 48777,
        "user": "Josch13",
        "userImageURL": "https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg",
    },
    {
        "id": 73424,
        ...
    },
    ...
]
}
...
```

## Component Hierarchy

![image](https://i.imgur.com/cvefcV6.png)

#### Component Details

| Component   | Description                                                      | State/Props |
| ----------- | ---------------------------------------------------------------- | :---------: |
| App         | This will make the initial data request and include React Router |    State    |
| Header      | This will render the header include the nav                      |    Props    |
| CountryList | This will render all of the country's flags                      |    Props    |
| Country     | This will render an individual country's unique images           |    Props    |
