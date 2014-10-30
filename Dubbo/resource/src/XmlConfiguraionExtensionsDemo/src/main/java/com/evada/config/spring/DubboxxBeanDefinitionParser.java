package com.evada.config.spring;

import com.evada.user.admin.Admin;
import org.springframework.beans.factory.support.BeanDefinitionBuilder;
import org.springframework.beans.factory.xml.AbstractSingleBeanDefinitionParser;
import org.springframework.util.StringUtils;
import org.w3c.dom.Element;

/**
 * Created by AliceHSY on 2014/10/30.
 */
public class DubboxxBeanDefinitionParser extends AbstractSingleBeanDefinitionParser {
    protected Class getBeanClass(Element element) {
        return Admin.class;
    }
    @Override
    protected void doParse(Element element, BeanDefinitionBuilder builder) {

        //从配置中获取属性 并解析转换成标准的bean配置属性
        String uname = element.getAttribute("uname");
        if (StringUtils.hasText(uname)) {
            builder.addPropertyValue("uname", uname);
        }
        //parse attr age
        String age = element.getAttribute("age");
        if (StringUtils.hasText(age)) {
            builder.addPropertyValue("age", age);
        }
        //parse attr sex
        String sex = element.getAttribute("sex");
        if (StringUtils.hasText(sex)) {
            builder.addPropertyValue("sex", sex);
        }
        //parse attr enable
        String enable = element.getAttribute("enable");
        if (StringUtils.hasText(enable)) {
            builder.addPropertyValue("enable", Boolean.valueOf(enable));
        }
        //parse end
    }
}
