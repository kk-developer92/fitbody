
from sqlalchemy import Integer, String, DateTime, Column, func
from .base import Base, DictMixin


class NutritionModel(Base, DictMixin):
    __tablename__ = "nutrition"

    id = Column(String, primary_key=True)
    type = Column(String)
    title = Column(String)
    image = Column(String)
    video = Column(String)
    description = Column(String)
    about_program = Column(String)
    price = Column(Integer)

    created_at = Column(DateTime, server_default=func.now())
    update_at = Column(DateTime, onupdate=func.now())

    def __repr__(self):
        return "<Nutrition(='%s', package='%s', type='%s', status='%s')>"
