package com.health.web.pxy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.health.web.util.Printer;

import lombok.Data;
@Data
@Component("pager") @Lazy
public class PageProxy {
	@Autowired CrawlingProxy crawler;
	@Autowired Printer printer;
	
	private int rowCount, startRow, endRow, 
				pageSize, pageCount, startPage, endPage, currPage,
				blockSize, blockCount, currBlock, prevBlock, nextBlock;
	private boolean existPrev, existNext;
	private String search;
	
	public void paging() {
		printer.accept("크롤링한 데이터 사이즈 :" +rowCount);
		pageCount = (rowCount % pageSize!=0 ) ? (rowCount / pageSize)+1 :  rowCount / pageSize;
		blockCount = (pageCount % blockSize !=0) ? (pageCount / blockSize)+1 : pageCount / blockSize;
		startRow = currPage * pageSize;
		endRow = (currPage != (pageCount-1)) ? startRow + (pageSize-1) : rowCount -1;
		currBlock = currPage / blockSize;
		startPage = currBlock * blockSize;
		endPage = (currBlock != (blockCount-1)) ? startPage +(blockSize-1): pageCount -1 ;
		nextBlock  = startPage + blockSize;
		prevBlock  = startPage - blockSize;
		existPrev = currBlock !=0;
		existNext = (currBlock+1) != blockCount;
	}
}
