#pragma once

#include <vector>
#include <string>

class Entity;

enum CollisionType
{
	AABB_AABB
};

struct Collision
{
	Entity* entity1;
	Entity* entity2;
	CollisionType type;
};

class CollisionManager
{
public:

	CollisionManager();
	~CollisionManager();

	void RegisterCollision(Entity* pEntity1, Entity* pEntity2, CollisionType pType);
	void ProcessCollisions();
	void ClearManifold();

private:

	std::vector<Collision*>mCollisionManifold;

};
