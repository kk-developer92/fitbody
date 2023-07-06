from sqlalchemy import MetaData, Integer, String, TIMESTAMP, DateTime, Column, func

from .base import Base, DictMixin


class UsersModel(Base, DictMixin):
    __tablename__ = "users"

    id = Column(String, primary_key=True)
    email = Column(String)
    username = Column(String)
    password = Column(String)

    created_at = Column(DateTime, server_default=func.now())
    update_at = Column(DateTime, onupdate=func.now())

    def __repr__(self):
        return "<User(='%s', package='%s', type='%s', status='%s')>"
