"""empty message

Revision ID: 49e6baa2700d
Revises: 1f35e540274e
Create Date: 2021-07-29 18:24:41.359542

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '49e6baa2700d'
down_revision = '1f35e540274e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint(None, 'category', ['id'])
    op.create_unique_constraint(None, 'item', ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'item', type_='unique')
    op.drop_constraint(None, 'category', type_='unique')
    # ### end Alembic commands ###