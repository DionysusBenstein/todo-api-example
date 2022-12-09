# to-do app for @powerfulnexto practice xd

`BASE_URL=`

## Get task list

Both query parameters are optional

> GET /tasks?skip=0&limit=10

Response Example (200 OK)

``` javascript
{
    "statusCode": 200,
    "message": "success",
    "data": [
        {
            "id": 5,
            "username": "govnoZalupa",
            "email": "govnoZalupa@gmail.com",
            "description": "asu asu asuzhdau",
            "isDone": false,
            "isEdited": false,
            "createdAt": "2022-11-30T12:08:55.000Z",
            "updatedAt": "2022-11-30T12:08:55.000Z"
        }
    ]
}
```

## Get task by id

> GET /tasks/{id}

Response Example (200 OK)

``` javascript
{
    "statusCode": 200,
    "message": "success",
    "data": {
        "id": 5,
        "username": "govnoZalupa",
        "email": "govnoZalupa@gmail.com",
        "description": "asu asu asuzhdau",
        "isDone": false,
        "isEdited": false,
        "createdAt": "2022-11-30T12:08:55.000Z",
        "updatedAt": "2022-11-30T12:08:55.000Z"
    }
}
```

## Create a new task

> POST /tasks

Body Example

``` javascript
{
    "username": "govnoZalupa",
    "email": "govnoZalupa@gmail.com",
    "description": "asu asu asuzhdau"
}
```

Response Example (201 Created)

``` javascript
{
    "statusCode": 201,
    "message": "success",
    "data": {
        "username": "govnoZalupa",
        "email": "govnoZalupa@gmail.com",
        "description": "asu asu asuzhdau",
        "id": 5,
        "isDone": false,
        "isEdited": false,
        "createdAt": "2022-11-30T12:08:55.000Z",
        "updatedAt": "2022-11-30T12:08:55.000Z"
    }
}
```

## Edit task by id

> PUT /tasks/{id}

Both parameters are optional

Body Example

``` javascript
{
    "isDone": true,
    "description": "test1"
}
```

Response Example (200 OK)

``` javascript
{
    "statusCode": 200,
    "message": "success"
}
```

## Delete task by id

> DELETE /tasks/{id}

Response Example (200 OK)

``` javascript
{
    "statusCode": 200,
    "message": "success"
}
```

## Delete all tasks

> DELETE /tasks

Response Example (200 OK)

``` javascript
{
    "statusCode": 200,
    "message": "success"
}
```
