package com.vmware.eso.e2e.simplejunit;

import org.junit.Assert;
import org.junit.Test;

public class Test1 {
	@Test
	public void positiveTest(){
		Assert.assertTrue(true);
	}
	
	@Test
	public void negativeTest(){
		Assert.assertTrue(false);
	}

}
