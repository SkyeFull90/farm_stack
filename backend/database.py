from model import Todo
import motor.motor_asyncio
from dotenv import load_dotenv
import os

load_dotenv()

connection_url = os.getenv("MONGODB_URI")

client = motor.motor_asyncio.AsyncIOMotorClient(connection_url)

database = client.TodoList
collection = database.todo


# Get one todo
async def fetch_one_todo(title):
    document = await collection.find_one({"title": title})
    return document


# Get all todos
async def fetch_all_todos():
    todos = []
    cursor = collection.find({})
    async for document in cursor:
        todos.append(Todo(**document))
    return todos


# Add a todo
async def create_todo(todo):
    document = todo
    result = await collection.insert_one(document)
    return document


# Update a todo
async def update_todo(title, description):
    await collection.update_one({"title": title}, {"$set": {"description": description}})
    document = await collection.find_one({"title": title})
    return document


# Delete a todo
async def remove_todo(title):
    await collection.delete_one({"title": title})
    return True
