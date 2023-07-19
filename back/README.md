Create virtual env

```shell
python -m venv ./venv
.\venv\Scripts\activate.bat
```

```shell
pip install -r requirements.txt
```

Generating migrations

```shell
alembic revision --autogenerate -m "Initial migration"
```

Running migrations

```shell
alembic upgrade head
```


```shell
uvicorn --reload app:app
```
