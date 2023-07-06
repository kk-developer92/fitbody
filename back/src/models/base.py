import typing

from sqlalchemy import create_engine, MetaData
from sqlalchemy.orm import declarative_base, sessionmaker

from config import POSTGRES_CONNECTION

Base = declarative_base()

class DictMixin:
    __table__: typing.Any

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}


eng = create_engine(POSTGRES_CONNECTION)
Session = sessionmaker(bind=eng)
