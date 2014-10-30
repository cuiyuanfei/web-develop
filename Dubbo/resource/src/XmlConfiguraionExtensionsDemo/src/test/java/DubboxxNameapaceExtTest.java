import com.evada.user.admin.Admin;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Created by AliceHSY on 2014/10/30.
 */
public class DubboxxNameapaceExtTest {
    @Test
    public void testDubboxNamespaceExt(){
        ApplicationContext applicationContext = new ClassPathXmlApplicationContext(new String[]{"application.xml"});
        Admin admin = (Admin) applicationContext.getBean("admin");
        System.out.println(admin.getUname());
    }
}