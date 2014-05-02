package com.lemania.eprospects.server;

import com.google.web.bindery.requestfactory.shared.Locator;
import com.googlecode.objectify.util.DAOBase;

public class ObjectifyLocator extends Locator<DatastoreObject, Long> {

	@Override
	public DatastoreObject create(Class<? extends DatastoreObject> clazz) {
		try {
			return clazz.newInstance();
		} catch (InstantiationException e) {
			throw new RuntimeException(e);
		} catch (IllegalAccessException e) {
			throw new RuntimeException(e);
		}
	}

	@Override
	public DatastoreObject find(Class<? extends DatastoreObject> clazz, Long id) {
		DAOBase daoBase = new DAOBase();
		return daoBase.ofy().find(clazz, id);
	}

	@Override
	public Class<DatastoreObject> getDomainType() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Long getId(DatastoreObject domainObject) {
		return domainObject.getId();
	}

	@Override
	public Class<Long> getIdType() {
		return Long.class;
	}

	@Override
	public Object getVersion(DatastoreObject domainObject) {
		return domainObject.getVersion();
	}

}
