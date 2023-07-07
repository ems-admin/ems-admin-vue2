package com.ems.config.config;

import com.google.common.cache.Cache;
import com.google.common.cache.CacheBuilder;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.concurrent.TimeUnit;

/**
 * @program: ems-vue2
 * @description: 缓存配置
 * @author: starao
 * @create: 2023-07-07 22:34
 **/
@Component
public class CacheConfig {

    private Cache<String, String> cache;

    public void put(String key, String value, int expireTime) {
        cache = CacheBuilder.newBuilder().expireAfterWrite(expireTime, TimeUnit.MINUTES).build();
        cache.put(key, value);
    }

    public String get(String key) {
        return cache.getIfPresent(key);
    }

    /**
     * 每天1点执行一次，清除过期缓存
     */
    @Scheduled(cron = "0 0 1 * * ?")
    public void clearExpired() {
        cache.cleanUp();
    }
}
