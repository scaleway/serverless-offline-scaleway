import json

def handle(event, context):
    print(event)
    return {
        "body": json.dumps({"message": "Hello"}),
        "headers": {
            "Content-Type": "application/json"
        },
        "statusCode": 200
    }
