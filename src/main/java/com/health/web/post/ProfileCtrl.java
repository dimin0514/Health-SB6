package com.health.web.post;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;
import java.util.function.Consumer;
import java.util.function.Supplier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.health.web.enums.Path;
import com.health.web.util.Printer;

@RestController
@RequestMapping("/profile")
public class ProfileCtrl {
	@Autowired ProfileMapper profileMapper; 
	@Autowired Printer printer;
	
	@PostMapping("/update/{userno}")
	public void profileUpdate(MultipartFile[] profileImg, @RequestParam String content , @PathVariable int userno) {
		printer.accept("넘어온콘텐츠값"+content+"넘어온 userno ="+ userno);
		Profile profile = new Profile();;
		String tempContent = null;
		
		UUID uuid = UUID.randomUUID();
		String uploadFolder = Path.UPLOAD_PATH.toString();
		for(MultipartFile multipartFile : profileImg) {
			String uploadFileName = uuid + "_" + multipartFile.getOriginalFilename();
			uploadFileName = uploadFileName.substring(uploadFileName.lastIndexOf("\\")+1);
			profile.setImg(uploadFileName);
			File saveFile = new File(uploadFolder,uploadFileName);
			try {
				multipartFile.transferTo(saveFile);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		profile.setUserno(userno);
		profile.setContent(tempContent);
		
		Supplier<List<Profile>> supplier = ()-> profileMapper.selectedProfile(userno);
		if(supplier.get().size() == 0) {
			Consumer<Profile> consumer = t -> profileMapper.insertUserImg(t);
			consumer.accept(profile);
		}else {
			Consumer<Profile> consumer = t -> profileMapper.updateProfile(profile);
			consumer.accept(profile);
		}

	}
	@GetMapping("/info/{userno}")
	public List<Profile> profileInfo(@PathVariable int userno){
		Supplier<List<Profile>> supplier = ()-> profileMapper.selectedProfile(userno);
		return supplier.get();
	}
}
