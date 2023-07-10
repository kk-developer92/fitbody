from sqlalchemy import Integer, String, DateTime, Column, func, Boolean
from sqlalchemy.orm import Mapped, mapped_column

from .base import Base, DictMixin


class UsersModel(Base, DictMixin):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True)
    username = Column(String)
    password = Column(String)
    email: Mapped[str] = mapped_column(String(length=320), unique=True, index=True, nullable=False)
    hashed_password: Mapped[str] = mapped_column(String(length=1024), nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    is_superuser: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    is_verified: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)

    created_at = Column(DateTime, server_default=func.now())
    update_at = Column(DateTime, onupdate=func.now())

    def __repr__(self):
        return "<User(='%s', package='%s', type='%s', status='%s')>"
