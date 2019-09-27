from django.contrib.auth.models import User
from adventure.models import Player, Room

Room.objects.all().delete()

# r_outside = Room(title="Outside Cave Entrance",
#                description="North of you, the cave mount beckons")

# r_foyer = Room(title="Foyer", description="""Dim light filters in from the south. Dusty
# passages run north and east.""")

# r_overlook = Room(title="Grand Overlook", description="""A steep cliff appears before you, falling
# into the darkness. Ahead to the north, a light flickers in
# the distance, but there is no way across the chasm.""")

# r_narrow = Room(title="Narrow Passage", description="""The narrow passage bends here from west
# to north. The smell of gold permeates the air.""")

# r_treasure = Room(title="Treasure Chamber", description="""You've found the long-lost treasure
# chamber! Sadly, it has already been completely emptied by
# earlier adventurers. The only exit is to the south.""")

# r_outside.save()
# r_foyer.save()
# r_overlook.save()
# r_narrow.save()
# r_treasure.save()

# Link rooms together
# r_outside.connectRooms(r_foyer, "n")
# r_foyer.connectRooms(r_outside, "s")

# r_foyer.connectRooms(r_overlook, "n")
# r_overlook.connectRooms(r_foyer, "s")

# r_foyer.connectRooms(r_narrow, "e")
# r_narrow.connectRooms(r_foyer, "w")

# r_narrow.connectRooms(r_treasure, "n")
# r_treasure.connectRooms(r_narrow, "s")

players=Player.objects.all()
for p in players:
  p.currentRoom=1
  p.save()

class World:
    def __init__(self):
        self.grid = None
        self.width = 0
        self.height = 0
    def generate_rooms(self, size_x, size_y, num_rooms):
        self.grid = [None] * size_y
        self.width = size_x
        self.height = size_y
        for i in range( len(self.grid) ):
            self.grid[i] = [None] * size_x
        # Start from lower-left corner (0,0)
        x = -1 # (this will become 0 on the first step)
        y = 0
        room_count = 0
        # Start generating rooms to the east
        direction = 1  # 1: east, -1: west
        # While there are rooms to be created...
        previous_room = None
        while room_count < num_rooms:
            # Calculate the direction of the new room
            if direction > 0 and x < size_x - 1:
                room_direction = "e"
                x += 1
            elif direction < 0 and x > 0:
                room_direction = "w"
                x -= 1
            else:
                # If we hit a wall, create north and reverse direction
                room_direction = "n"
                y += 1
                direction *= -1
            # Create a room in the given direction
            room = Room(id=room_count, title="A Generic Room", description="This is a generic room.", x=x, y=y)
            # Note that in Django, you'll need to save the room after you create it
            self.grid[y][x] = room
            # Connect the new room to the previous room
            if previous_room is not None:
                previous_room.connectRooms(room, room_direction)
            # Update iteration variables
            previous_room = room
            room_count += 1

w = World()
num_rooms = 30
width = 6
height = 6
w.generate_rooms(width, height, num_rooms)
