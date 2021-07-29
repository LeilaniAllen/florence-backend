from app import db
from app.models.item import Item
from datetime import timedelta, datetime
from sqlalchemy.orm import backref

class Customer(db.Model):
    customer_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_name = db.Column(db.String(30), unique=True)
    fridge_id = db.Column(db.Integer, db.ForeignKey('fridge.fridge_id'))
    fridge = db.relationship("Fridge", backref=backref("customer", uselist=False))

    def json_object(self):
        return {
            "id": self.customer_id,
            "user_name": self.user_name,
            "fridge_id": self.fridge_id
        }