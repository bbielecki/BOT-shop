package shop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableAutoConfiguration
@ComponentScan("shop")
public class WebAppInitializer{

    public static void main(String[] args) {
        SpringApplication.run(WebAppInitializer.class, args);
    }
}

