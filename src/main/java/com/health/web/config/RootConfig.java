package com.health.web.config;

import javax.sql.DataSource;


import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.jdbc.datasource.DriverManagerDataSource;


@Configuration
@MapperScan(basePackages = {"com.health.web"})
@ComponentScan(basePackages = {"com.health.web"})
public class RootConfig {
	@Bean
	public DataSource dataSource() {
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setDriverClassName("org.mariadb.jdbc.Driver");
		dataSource.setUrl("jdbc:mariadb://healthdb.c9yfftywghgl.ap-northeast-2.rds.amazonaws.com/healthdb");
		dataSource.setUsername("healthdb");
		dataSource.setPassword("healthdb");
		return dataSource;
	}
	@Bean
	public DataSourceTransactionManager txManger() {
		return new DataSourceTransactionManager(dataSource());
	}
}
