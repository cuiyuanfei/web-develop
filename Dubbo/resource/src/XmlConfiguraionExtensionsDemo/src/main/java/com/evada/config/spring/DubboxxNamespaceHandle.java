package com.evada.config.spring;

import org.springframework.beans.factory.xml.NamespaceHandlerSupport;

/**
 * Created by AliceHSY on 2014/10/30.
 */
public class DubboxxNamespaceHandle extends NamespaceHandlerSupport {
    @Override
    public void init() {
        registerBeanDefinitionParser("admin",new DubboxxBeanDefinitionParser());
    }
}
