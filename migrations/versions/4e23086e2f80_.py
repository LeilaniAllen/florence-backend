"""empty message

Revision ID: 4e23086e2f80
Revises: 951d48011026
Create Date: 2021-07-28 19:36:47.576303

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4e23086e2f80'
down_revision = '951d48011026'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('item', sa.Column('fridge_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'item', 'fridge', ['fridge_id'], ['fridge_id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'item', type_='foreignkey')
    op.drop_column('item', 'fridge_id')
    # ### end Alembic commands ###
