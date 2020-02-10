package com.health.web.routine;

import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public interface RoutineMapper {
	public List<Routine> find1RoutineById(Routine routine);
	public List<Routine> find2RoutineById(Routine routine);
	public List<Routine> find3RoutineById(Routine routine);
	public List<Routine> find5RoutineById(Routine routine);
	public List<Routine> findAeroRoutineById(Routine routine);
	public List<Routine> findTotalForNewbie(Routine routine);
}
