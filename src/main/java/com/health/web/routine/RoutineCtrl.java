package com.health.web.routine;

import java.util.List;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.health.web.util.Printer;

@RestController
@RequestMapping("/routine")
public class RoutineCtrl {
	@Autowired
	Routine routine;
	@Autowired
	Printer printer;
	@Autowired
	RoutineMapper routineMapper;
	
	@PostMapping("/{userid}")
	public List<Routine> showRoutine(@PathVariable String userid, @RequestBody Routine param) {
		printer.accept("컨트롤러 도착" + param);
		Function<Routine, List<Routine>> f = null;
		switch(param.getDivision()) {
			case 1 : f = t -> routineMapper.find1RoutineById(param);break;
			case 2 : f = t -> routineMapper.find2RoutineById(param);break;
			case 3 : f = t -> routineMapper.find3RoutineById(param);break;
			case 5 : f = t -> routineMapper.find5RoutineById(param);break;
			case 6 : f = t -> routineMapper.findAeroRoutineById(param);break;
			case 7 : f = t -> routineMapper.findTotalForNewbie(param); break;
			}
		return f.apply(param);
	}
}
